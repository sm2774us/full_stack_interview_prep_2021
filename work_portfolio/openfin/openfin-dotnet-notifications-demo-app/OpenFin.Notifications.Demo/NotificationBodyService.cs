using System;
using System.Collections.Generic;
using System.IO;

namespace OpenFin.Notifications.Demo
{
    public enum BodyContentType
    {
        PlainText,
        Markdown
    }

    internal static class FileExtensions
    {
        internal const string TextFile = "txt";
        internal const string Markdown = "md";
    }

    internal static class NotificationBodyService
    {
        public static string GetNotificationBodyContent(BodyContentType contentType)
        {
            switch (contentType)
            {
                case BodyContentType.PlainText:
                    return getBodyContentByExtension(FileExtensions.TextFile);
                case BodyContentType.Markdown:
                    return getBodyContentByExtension(FileExtensions.Markdown);
                default:
                    throw new ArgumentException("unknown content type");
            }
        }

        public static ButtonOptions[] GenerateButtons(int buttonCount, int ctaIx)
        {
            var options = new List<ButtonOptions>();

            for (int i = 0; i < buttonCount; i++)
            {
                options.Add(new ButtonOptions
                {
                    Title = $"Button{i + 1}",
                    IconUrl = "https://openfin.co/favicon-32x32.png",
                    OnNotificationButtonClick = new Dictionary<string, object>
                        {
                            { "btn", $"button{i + 1}" }
                        },

                    IsCallToActionButton = ctaIx - 1 == i
                });
            }

            return options.ToArray();
        }

        private static string getBodyContentByExtension(string ext)
        {
            string path = System.Reflection.Assembly.GetExecutingAssembly().Location;

            //once you have the path you get the directory with:
            var directory = System.IO.Path.GetDirectoryName(path);
            var contentPath = Path.Combine(directory, $"body.{ext}");
            return File.ReadAllText(contentPath);
        }
    }
}