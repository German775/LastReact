using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.Model
{
    public class Data
    {
        public int FrameId { get; set; }
        public string Type { get; set; }
        public DateTime TimeStamp { get; set; }
        public int EventId { get; set; }
        public byte[] Datas { get; set; }
    }
}
