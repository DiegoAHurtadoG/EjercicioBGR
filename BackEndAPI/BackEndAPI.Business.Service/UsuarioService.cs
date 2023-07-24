using BackEndAPI.Business.Interface;
using BackEndAPI.Domain.Entity;
using BackEndAPI.Domain.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndAPI.Business.Service
{    
    public class UsuarioService: IUsuarioService
    {
        protected IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public List<Usuario> GetAll()
        {
            return _usuarioRepository.GetAll();
        }

        public Usuario GetById(int id)
        {
            return _usuarioRepository.GetById(id);
        }

        public Usuario Insert(Usuario usuario)
        {
            return _usuarioRepository.Insert(usuario);
        }

        public Usuario Update(Usuario usuario)
        {
            return _usuarioRepository.Update(usuario);
        }

        public void Delete(int id)
        {
            _usuarioRepository.Delete(id);
        }
    }
}
