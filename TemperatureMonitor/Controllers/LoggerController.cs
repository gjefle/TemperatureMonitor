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
        public IEnumerable<Logger> Get()
        {
            return _ctx.Logger.ToList();
        }

        //// GET api/Logger/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
