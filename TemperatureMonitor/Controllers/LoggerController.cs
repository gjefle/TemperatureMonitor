using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TemperatureMonitor.Data;
using TemperatureMonitor.Models;

namespace TemperatureMonitor.Controllers
{
    [Route("api/[controller]")]
    public class LoggerController : Controller
    {
        private readonly PlantContext _ctx;

        public LoggerController(PlantContext ctx)
        {
            _ctx = ctx;
        }


        // GET api/Logger
        [HttpGet]
        public IEnumerable<Logger> Logger()
        {
            return _ctx.Logger.ToList();
        }
    }
}
