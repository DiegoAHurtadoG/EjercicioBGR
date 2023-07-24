using BackEndAPI.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndAPI.Business.Interface
{
    public interface IUsuarioService
    {
        List<Usuario> GetAll();
        Usuario GetById(int id);
        Usuario Insert(Usuario usuario);
        Usuario Update(Usuario usuario);
        void Delete(int id);
    }
}
