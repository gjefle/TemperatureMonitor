using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TemperatureMonitor.Data;
using TemperatureMonitor.Models;

namespace TemperatureMonitor.Controllers
{

    [Route("api/[controller]")]
    public class TemperatureController : Controller
    {
        private readonly PlantContext _ctx;

        public TemperatureController(PlantContext ctx)
        {
            _ctx = ctx;
        }


        // GET api/Logger
        [HttpGet]
        public IEnumerable<Temperature> Temperature()
        {
            return _ctx.Temperature
                .AsNoTracking()
                .ToList();
        }

        // GET api/Temperature/TemperatureData/1/0
        [HttpGet]
        [Route("{TemperatureData}/{loggerId}/{unitEnum}")]
        public IEnumerable<TemperatureData> TemperatureData([FromRoute]int loggerId, [FromRoute]int unitEnum)
        {
            return _ctx.Temperature
                .AsNoTracking()
                .Where(t => t.LoggerId == loggerId)
                .Select(t => new TemperatureData(t, (UnitEnum)unitEnum));
        }
      
    }
}
