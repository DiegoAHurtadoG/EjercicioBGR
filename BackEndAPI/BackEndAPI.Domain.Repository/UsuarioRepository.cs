using BackEndAPI.Domain.Data;
using BackEndAPI.Domain.Entity;
using BackEndAPI.Domain.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndAPI.Domain.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        protected DataAccessContext _dataAccess;
        public UsuarioRepository(DataAccessContext dataAccess)
        {
            _dataAccess = dataAccess;
        }

        public List<Usuario> GetAll()
        {
            return _dataAccess.Set<Usuario>().ToList();
        }

        public Usuario GetById(int id)
        {
            return _dataAccess.Set<Usuario>().FirstOrDefault(x => x.Id == id);
        }

        public Usuario Insert(Usuario usuario)
        {
            _dataAccess.Add(usuario);
            _dataAccess.SaveChanges();
            return usuario;
        }

        public Usuario Update(Usuario usuario)
        {
            _dataAccess.Update(usuario);
            _dataAccess.SaveChanges();
            return usuario;
        }

        public void Delete(int id)
        {
            Usuario usuario = GetById(id);
            _dataAccess.Remove(usuario);
            _dataAccess.SaveChanges();
        }
    }
}
