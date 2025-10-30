using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BrainHubBack;
using BrainHubBack.Data;

namespace BrainHubBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtigoController : ControllerBase
    {
        private readonly BrainHubBackContext _context;

        public ArtigoController(BrainHubBackContext context)
        {
            _context = context;
        }

        // GET: api/Artigo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artigo>>> GetArtigo()
        {
            return await _context.Artigo.ToListAsync();
        }

        // GET: api/Artigo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Artigo>> GetArtigo(int id)
        {
            var artigo = await _context.Artigo.FindAsync(id);

            if (artigo == null)
            {
                return NotFound();
            }

            return artigo;
        }

        // PUT: api/Artigo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtigo(int id, Artigo artigo)
        {
            if (id != artigo.Id)
            {
                return BadRequest();
            }

            _context.Entry(artigo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtigoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Artigo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Artigo>> PostArtigo(Artigo artigo)
        {
            _context.Artigo.Add(artigo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArtigo", new { id = artigo.Id }, artigo);
        }

        // DELETE: api/Artigo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtigo(int id)
        {
            var artigo = await _context.Artigo.FindAsync(id);
            if (artigo == null)
            {
                return NotFound();
            }

            _context.Artigo.Remove(artigo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtigoExists(int id)
        {
            return _context.Artigo.Any(e => e.Id == id);
        }
    }
}
