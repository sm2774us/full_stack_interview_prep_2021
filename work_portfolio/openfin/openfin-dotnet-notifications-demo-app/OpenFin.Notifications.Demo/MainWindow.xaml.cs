using Newtonsoft.Json;
using OpenFin.Notifications.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace OpenFin.Notifications.Demo
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private const string EXPIRING_NOTIFICATION_ID = "wpf/expiringnotification";
        private const string NOTIFICATION_TITLE = "WPF Notifications Demo App";
        private List<RadioButton> ctaButtons;
        private List<RadioButton> indicatorTypes;


        public MainWindow()
        {
            InitializeComponent();
            ctaButtons = LogicalTreeHelper.GetChildren(ctaPanel).OfType<RadioButton>().ToList();
            indicatorTypes = LogicalTreeHelper.GetChildren(pnlIndicators).OfType<RadioButton>().ToList();
            AppDomain.CurrentDomain.UnhandledException += (s, e) => { MessageBox.Show(e.ExceptionObject.ToString()); };

            NotificationClient.NotificationClosed += NotificationClient_NotificationClosed;
            NotificationClient.NotificationCreated += NotificationClient_NotificationCreated;
            NotificationClient.NotificationActionOccurred += NotificationClient_NotificationActionOccurred;
            toggleButtons(false);
            
            
            NotificationClient.InitializeAsync().ContinueWith(x =>
            {
                toggleButtons(true);

                NotificationClient.GetProviderStatusAsync().ContinueWith(s => {
                    Dispatcher.Invoke(() =>
                    {
                        var status = s.Result;
                        bodyContentTypeSelector.SelectedIndex = 0;

                        connected.Content = !status.Connected ? "Failed to connect." : "Connected";
                        if (status.Connected)
                        {
                            version.Content = $"(v.{status.Version})";
                        }
                    });
                });
            });
        }

        private void toggleButtons(bool isEnabled)
        {
            Dispatcher.Invoke(() =>
            {
                fetchButton.IsEnabled = clearAllButton.IsEnabled = toggleButton.IsEnabled = isEnabled;

                foreach (FrameworkElement item in ((Panel)create1.Parent).Children)
                {
                    if (item is Button)
                    {
                        item.IsEnabled = isEnabled;
                    }
                }
            });
        }

        private void NotificationClient_NotificationActionOccurred(NotificationEvent @event)
        {
            log($"Notification action occurred fired by trigger ({@event.ActionTrigger}). {JsonConvert.SerializeObject(@event.NotificationActionResult)}\n");

            if (@event.ActionTrigger == ActionTriggers.Control)
            {
                if (@event.NotificationActionResult.ContainsKey("btn"))
                {
                    log($"{@event.NotificationActionResult["btn"]} from NotificationId {@event.NotificationOptions.Id} clicked!");
                }
            }
        }

        private void NotificationClient_NotificationCreated(NotificationEvent @event)
        {
            log($"Notification {@event.NotificationOptions.Id} created.\n");
        }

        private void NotificationClient_NotificationClosed(NotificationEvent @event)
        {
            log($"Notification {@event.NotificationOptions.Id} closed.\n");
        }

        private void log(string text)
        {
            Dispatcher.Invoke(() =>
            {
                messageBox.Text += text;
                messageBox.ScrollToEnd();
            });
        }

        private async void CreateButton_Click(object sender, RoutedEventArgs e)
        {
            var id = (sender as FrameworkElement).Name.Substring("create".Length);

            try
            {
                int ctaIx = 0;

                if (ctaButtons.Any(x => x.IsChecked == true))
                {
                    ctaIx = int.Parse(ctaButtons.FirstOrDefault(x => x.IsChecked == true)?.Content?.ToString());
                }

                await NotificationClient.CreateNotificationAsync($"wpf/{id}", new NotificationOptions
                {
                    Title = $"{NOTIFICATION_TITLE}-wpf/{id}",
                    Body = NotificationBodyService.GetNotificationBodyContent((BodyContentType)bodyContentTypeSelector.SelectedIndex),
                    Category = "Category",
                    Icon = "https://openfin.co/favicon-32x32.png",
                    OnNotificationSelect = new Dictionary<string, object>
                    {
                        {"task", "selected" }
                    },
                    Buttons = NotificationBodyService.GenerateButtons((int)btnCount.Value, ctaIx),
                    NotificationIndicator = new NotificationIndicator { IndicatorText = tbIndicatorText.Text, IndicatorType = getSelectedIndicatorType() },
                    IsStickyNotification = cbSticky.IsChecked.Value,
                    CustomData = new Dictionary<string, object>()
                }) ;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private IndicatorType getSelectedIndicatorType()
        {
            var selectedType = indicatorTypes.FirstOrDefault(x => x.IsChecked == true).Content.ToString();
            return (IndicatorType)Enum.Parse(typeof(IndicatorType), selectedType);
        }

        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            var id = (sender as FrameworkElement).Name.Substring("close".Length);
            NotificationClient.ClearNotificationAsync($"wpf/{id}");
        }

        private async void FetchButton_Click(object sender, RoutedEventArgs e)
        {
            var fetchResult = await NotificationClient.GetAllAppNotificationsAsync();
            log($"Fetched {fetchResult.Count()} notifications");
        }

        private void ToggleNotifications_Click(object sender, RoutedEventArgs e)
        {
            NotificationClient.ToggleNotificationCenterAsync();
        }

        private void ClearAll_Click(object sender, RoutedEventArgs e)
        {
            NotificationClient.ClearAllNotificationsAsync();
        }

        private void CloseExpiring_Click(object sender, RoutedEventArgs e)
        {
            NotificationClient.ClearNotificationAsync(EXPIRING_NOTIFICATION_ID);
        }

        private async void CreateExpiring_Click(object sender, RoutedEventArgs e)
        {
            var options = new NotificationOptions
            {
                Body = "# This notification will expire in **10 seconds**.",
                Title = NOTIFICATION_TITLE,
                Category = "Expiring Notification",
                Buttons = new[]
            {
                    new ButtonOptions() { Title = "Button1", IconUrl = "https://openfin.co/favicon-32x32.png" },
                    new ButtonOptions() { Title = "Button2", IconUrl = "https://openfin.co/favicon-32x32.png"}
                },
                Icon = "https://openfin.co/favicon-32x32.png",
                Expires = DateTime.Now.AddSeconds(10),
                OnNotificationExpired = new Dictionary<string, object>
                {
                    { "foo" , "bar" }
                },
                CustomData = new Dictionary<string, object>()
            };

            await NotificationClient.CreateNotificationAsync(EXPIRING_NOTIFICATION_ID, options);
        }

        private void btnCount_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            lblButtonCount.Content = $"Button Count ({e.NewValue})";
            if (ctaButtons == null) return;
            foreach (var button in ctaButtons)
            {
                if (double.Parse(button.Content.ToString()) <= e.NewValue)
                {
                    button.IsEnabled = true;
                }
                else
                {
                    button.IsEnabled = false;
                }
            }

        }

        private void messageBox_PreviewMouseDown(object sender, MouseButtonEventArgs e)
        {
            messageBox.Text = string.Empty;
        }
    }
}