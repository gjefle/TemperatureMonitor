﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemperatureMonitor.Models
{
    public class Unit
    {
        public int UnitId { get; set; }
        public string Name { get; set; }
        public UnitEnum UnitEnum { get; set; }
    }
}
