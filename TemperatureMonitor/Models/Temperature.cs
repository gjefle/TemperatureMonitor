using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemperatureMonitor.Models
{
    public class Temperature
    {
        public int TemperatureId { get; set; }
        public double Value { get; set; }
        public DateTime LogDate{ get; set; }

        public int LoggerId { get; set; }
        public Logger Logger { get; set; }
    }
}
