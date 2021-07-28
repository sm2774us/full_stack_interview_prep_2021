using System.Collections.Generic;

namespace DotNetCoreReactRedux.Models
{
    public class GenreDetailedItemContainer
    {
        public string GenreName { get; set; }
        public List<GenreDetailedItem> Items { get; set; }
    }
}
