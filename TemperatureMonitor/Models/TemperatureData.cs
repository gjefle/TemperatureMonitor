using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemperatureMonitor.Models
{
    public class TemperatureData
    {
        public TemperatureData(Temperature temperature, UnitEnum unitEnum)
        {
            switch (unitEnum)
            {
                case UnitEnum.Celsius:
                    Value = temperature.Celsius;
                    break;
                case UnitEnum.Fahreneheit:
                    Value = temperature.Fahrenheit;
                    break;
                case UnitEnum.Kelvin:
                    Value = temperature.Celsius + 273.15;
                    break;
                default:
                    Value = 0;
                    break;
            }
            Value = Math.Round(Value, 1);
            LogDate = temperature.LogDate;
        }
        public double Value { get; set; }
        public DateTimeOffset LogDate { get; set; }
    }
}
