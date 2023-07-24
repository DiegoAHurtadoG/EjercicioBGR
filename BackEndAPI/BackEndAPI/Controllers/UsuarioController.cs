using BackEndAPI.Business.Interface;
using BackEndAPI.Domain.Entity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEndAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        protected IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        public List<Usuario> GetAll()
        {
            return _usuarioService.GetAll();
        }

        [HttpGet]
        public Usuario GetById(int id)
        {
            return _usuarioService.GetById(id);
        }

        [HttpPost]
        public Usuario Insert([FromBody] Usuario usuario)
        {
            return _usuarioService.Insert(usuario);
        }

        [HttpPut]
        public Usuario Update([FromBody] Usuario usuario)
        {
            return _usuarioService.Update(usuario);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            _usuarioService.Delete(id);
        }
    }
}
