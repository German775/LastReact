using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.Model
{
    public class ConfigCamera
    {
        public string videostream_link { get; set; }
        public string camera_id { get; set; }
        public string motion_detector_parameters { get; set; }
        public string frames { get; set; }
        public string threshold { get; set; }
    }
}
