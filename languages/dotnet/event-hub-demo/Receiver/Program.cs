using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.ServiceBus.Messaging;
using Microsoft.Threading;
using System.Threading.Tasks;

using Microsoft.Threading;

namespace Receiver
{
    class Program
    {
        static void Main(string[] args)
        {
            AsyncPump.Run(MainAsync);
        }


        static async Task MainAsync()
        {
            string eventHubConnectionString = "{Your hub connection string}";
            string eventHubName = "{Your hub name}";
            string storageAccountName = "{Your storage account name}";
            string storageAccountKey = "{Your storage account key}";
            string storageConnectionString = 
                string.Format("DefaultEndpointsProtocol=https;AccountName={0};AccountKey={1}",
                storageAccountName, storageAccountKey);

            string eventProcessorHostName = Guid.NewGuid().ToString();
            EventProcessorHost eventProcessorHost = 
                new EventProcessorHost(
                    eventProcessorHostName, 
                    eventHubName, 
                    EventHubConsumerGroup.DefaultGroupName, 
                    eventHubConnectionString, storageConnectionString);
            var epo = new EventProcessorOptions()
            {
                MaxBatchSize = 100,
                PrefetchCount = 1,
                ReceiveTimeOut = TimeSpan.FromSeconds(20)
            };
            await eventProcessorHost.RegisterEventProcessorAsync<SimpleEventProcessor>(epo);


            Console.WriteLine("Receiving. Press enter key to stop worker.");
            Console.ReadLine();
        }
    }
}
