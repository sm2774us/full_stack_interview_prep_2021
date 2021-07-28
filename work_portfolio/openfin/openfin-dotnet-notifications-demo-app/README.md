# OpenFin Notifications Service .NET Client Demo

The .NET Notifications Service client provides an interface for the Notifications Service allowing notifications to be manipulated from .NET Applications.

## Dependencies

[OpenFin.Notifications](https://www.nuget.org/packages/OpenFin.Notifications/)
[OpenFin Desktop](https://www.nuget.org/packages/OpenfinDesktop/) (v16.0 and higher)

# Getting Started

## Initialization

The Notification Service API is centered around the static NotificationClient object. You can listen out for NotificationClient Events and then Initialize the client (below is an example from the demo).

```js

NotificationClient.NotificationClosed += NotificationClient_NotificationClosed;
NotificationClient.NotificationCreated += NotificationClient_NotificationCreated;
NotificationClient.NotificationActionOccurred += NotificationClient_NotificationActionOccurred;

 NotificationClient.InitializeAsync().ContinueWith(x =>
            {
                
                NotificationClient.GetProviderStatusAsync().ContinueWith(s => {
                    Dispatcher.Invoke(() =>
                    {
                        var status = s.Result;

                        connected.Content = !status.Connected ? "Failed to connect." : "Connected";
                        if (status.Connected)
                        {
                            version.Content = $"(v.{status.Version})";
                        }
                    });
                });
            });
```

## Notification requirements

- Notifications must have an Id, title, category, and icon

- Notification bodies can either be plain text or markdown 

- Notifications can have at most 4 buttons

## Notification Action Delegates

NotificiationClient action delegates facilitate the handling of various notification related events.

## NotificationActionOccurred Delegate

The handler for notification actions are invoked when notification buttons and or bodies are clicked or when notifications expire.

## NotificationClosed Delegate

The handler for these events are invoked when notifications are closed.

## NotificationCreated Delegate

Handlers for these events are invoked when notifications are created.

# Demo Application

![embed](ss1.png)

![embed](ss2.png)

The OpenFin.Notifications.Demo project is a WPF application demonstrating the notification client's functionality. Functionality demonstrated include creating notifications, deleting notifications, creating expiring notifications, configuring buttons within the notifications, responding to events when notifications are interacted with (body and button clicks) or expire, and toggling the visibility of the Notification Center.


## License

The code in this repository is distributed under the Apache License, Version 2.0

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin’s Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.



Copyright 2018-2019 OpenFin

https://openfin.co/developer-agreement/ 
https://openfin.co/licensing/
