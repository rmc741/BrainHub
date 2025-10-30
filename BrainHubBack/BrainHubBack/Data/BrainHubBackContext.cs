using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BrainHubBack;

namespace BrainHubBack.Data
{
    public class BrainHubBackContext : DbContext
    {
        public BrainHubBackContext (DbContextOptions<BrainHubBackContext> options)
            : base(options)
        {
        }

        public DbSet<BrainHubBack.Artigo> Artigo { get; set; } = default!;
    }
}
