using System;
using Microsoft.EntityFrameworkCore;
using TemperatureMonitor.Models;

namespace TemperatureMonitor.Data
{
    public class PlantContext: DbContext
    {
        public PlantContext(DbContextOptions<PlantContext> options) : base(options){ }
        public DbSet<Temperature> Temperature { get; set; }
        public DbSet<Logger> Logger { get; set; }
        public DbSet<Unit> Unit { get; set; }

    }
}
