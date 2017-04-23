using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemperatureMonitor.Models
{
    public class Logger
    {
        public int LoggerId { get; set; }
        public string Name { get; set; }
        public double CelsiusMin { get; set; }
        public double CelsiusMax { get; set; }
        public double CelsiusAverage { get; set; }
        public int LogInterval { get; set; }
        public int UnitId { get; set; }
        public Unit Unit { get; set; }

    }
}
