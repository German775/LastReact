using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using React.Model;
using System.Runtime.Serialization.Json;
using System.Runtime.Serialization;

namespace React.Controllers
{
    [Route("api/[controller]")]
    public class ConfigController : Controller
    {
        [HttpGet("/getConfig")]
        public string GetConfig(string typeConfig)
        {
            try
            {
                if (typeConfig == "Camera")
                {
                    using (var reader = new StreamReader("Config/configCamera.json"))
                    {
                        return reader.ReadToEnd();
                    }
                }
                else 
                {
                    using (var reader = new StreamReader("Config/configService.json"))
                    {
                        return reader.ReadToEnd();
                    }
                }
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return null;
            }
        }

        [HttpPost("/setConfigForCamera")]
        public void SetConfigForCamera(ConfigCamera config)
        {
            var serialize = new DataContractJsonSerializer(typeof(ConfigCamera));
            using (var fileStream = new FileStream("Config/configCamera.json", FileMode.Truncate))
            {
                serialize.WriteObject(fileStream, config);
            }
        }

        [HttpPost("/setConfigForService")]
        public void SetConfigForService(ConfigService config)
        {
            var serialize = new DataContractJsonSerializer(typeof(ConfigService));
            using (var fileStream = new FileStream("Config/configService.json", FileMode.Truncate))
            {
                serialize.WriteObject(fileStream, config);
            }
        }

        [HttpGet("/getCameras")]
        public string GetCameras()
        {
            try
            {
                using (var reader = new StreamReader("Config/cameras.json"))
                {
                    return reader.ReadToEnd();
                }
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}
