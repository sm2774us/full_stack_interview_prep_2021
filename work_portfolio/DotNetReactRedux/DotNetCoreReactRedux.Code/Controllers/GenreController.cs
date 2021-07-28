using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using DotNetCoreReactRedux.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace DotNetCoreReactRedux.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GenreController : ControllerBase
    {
        [Route("info/{genre}")]
        [HttpGet]
        public GenreInfo Get(string genre)
        {
            var paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 8, 11);

            return new GenreInfo()
            {
                GenreName = genre,
                Paragraphs = paragraphs.ToArray()
            };
        }

        [Route("details/{genre}")]
        [HttpGet]
        public GenreDetailedItemContainer GetDetailed(string genre)
        {
            if (GenreDetailsFactory.Items.Value.ContainsKey(genre.ToLower()))
            {
                return new GenreDetailedItemContainer()
                {
                    GenreName = genre,
                    Items = GenreDetailsFactory.Items.Value[genre.ToLower()]
                };
            }
            return new GenreDetailedItemContainer()
            {
                GenreName = genre,
                Items = new List<GenreDetailedItem>()
            };
        }
    }


    public static class GenreDetailsFactory
    {
        public static Lazy<Dictionary<string, List<GenreDetailedItem>>> Items = new Lazy<Dictionary<string, List<GenreDetailedItem>>>(CreateItems, LazyThreadSafetyMode.None);


        private static Dictionary<string, List<GenreDetailedItem>> CreateItems()
        {
            var items = new Dictionary<string, List<GenreDetailedItem>>();


            items.Add("gabber", new List<GenreDetailedItem>()
            {
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 3, 11).ToArray(),
                    Band = "Rotterdam Termination Squad",
                    Title = "Poing",
                    ImageUrl =
                        "https://img.discogs.com/OvgtN_-O-4MapL7Hr9L5NUNalF8=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-146496-1140115140.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 7, 11).ToArray(),
                    Band = "De Klootzakken",
                    Title = "Dominee Dimitri",
                    ImageUrl =
                        "https://img.discogs.com/nJ2O1mYa4c5nkIZcuKK_6wN-lH0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-114282-1085597479.jpg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 8, 11).ToArray(),
                    Band = "Neophyte",
                    Title = "Protracker Ep",
                    ImageUrl =
                        "https://img.discogs.com/YC8l_-aoYt-OcLNTntu57FIA5w8=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5039-1149857244.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 2, 11).ToArray(),
                    Band = "Disciples Of Belial",
                    Title = "Goat Of Mendes",
                    ImageUrl =
                       "https://img.discogs.com/vHAvCPck9EHzi78PG5HDtAMxv0M=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-160557-1546568764-3706.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 7, 11).ToArray(),
                    Band = "Bloodstrike",
                    Title = "Pathogen",
                    ImageUrl =
                        "https://img.discogs.com/SAqIcgp3kiqPaSVZsGn-oh8E4RE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-18210-1448556049-2613.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 3, 11).ToArray(),
                    Band = "Mind Of Kane",
                    Title = "The Mind EP",
                    ImageUrl =
                        "https://img.discogs.com/Hc_is4Ga5A1704qshrkXp9LkhKM=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-160262-1557585935-9794.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 5, 11).ToArray(),
                    Band = "Stickhead",
                    Title = "Worlds Hardest Kotzaak",
                    ImageUrl =
                        "https://img.discogs.com/HFKhwj9ZfVEwLW0YJm_rUHx75lU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-20557-1352933734-5019.jpeg.jpg"
                },



            });

            items.Add("acid house", new List<GenreDetailedItem>()
            {
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 5, 11).ToArray(),
                    Band = "Various",
                    Title = "ACid House",
                    ImageUrl =
                        "https://img.discogs.com/WmSfj73-GK0TQhpLZTnLaEqWvdU=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1224150-1264336074.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 3, 11).ToArray(),
                    Band = "Rififi",
                    Title = "Dr Acid And Mr House",
                    ImageUrl =
                        "https://img.discogs.com/3w5QDa6y7PK7tYZ99hzPnMdxIVE=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-195695-1484590974-8359.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 6, 11).ToArray(),
                    Band = "Tyree",
                    Title = "Acid Over",
                    ImageUrl =
                        "https://img.discogs.com/rQVeuPgGK0ksQ-g2xJEWrx1ktnc=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-61941-1080462105.jpg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 2, 11).ToArray(),
                    Band = "Acid Jack",
                    Title = "Acid : Can You Jack",
                    ImageUrl =
                       "https://img.discogs.com/ojC7tbyzBe9XLpC9-sPtYiSfu4g=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-466567-1155405490.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 5, 11).ToArray(),
                    Band = "Bam Bam",
                    Title = "Wheres Your Child",
                    ImageUrl =
                        "https://img.discogs.com/RIsPWasW9OV6iJlGW1dF7x5B_Hg=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-43506-1356639075-5067.jpeg.jpg"
                },




            });

            items.Add("drum & bass", new List<GenreDetailedItem>()
            {
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 8, 11).ToArray(),
                    Band = "Bad Company",
                    Title = "Bad Company Classics",
                    ImageUrl =
                        "https://img.discogs.com/uArBfSolc15i_Ys5S4auaHYTo8w=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1138493-1195902484.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 4, 11).ToArray(),
                    Band = "Adam F",
                    Title = "F Jam",
                    ImageUrl =
                        "https://img.discogs.com/99njVrjJq6ES0l6Va2eTFcjP1AU=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5849-1237314693.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 2, 11).ToArray(),
                    Band = "Diesel Boy",
                    Title = "A Soldier's Story - A Drum And Bass DJ Mix",
                    ImageUrl =
                        "https://img.discogs.com/cFV--pJXg69KkvlJ6q8EV8pg218=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3353-1175897684.jpeg.jpg"
                },
                new GenreDetailedItem()
                {
                    Paragraphs = LoremNET.Lorem.Paragraphs(8, 9, 4, 5, 4, 11).ToArray(),
                    Band = "Future Mind",
                    Title = "Drum & Bass",
                    ImageUrl =
                       "https://img.discogs.com/R46K8de0GA89HoYxJDjUBDexmgs=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4685019-1372172049-9885.jpeg.jpg"
                },
            });

            return items;
        }
    }
}
