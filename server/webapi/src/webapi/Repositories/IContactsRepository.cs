using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.Repositories
{
    public interface IContactsRepository
    {
        List<Contact> FindAllUsers();
        Contact FindUserById(int id);
        List<Contact> AddUser(Contact contact);
        List<Contact> UpdateUser(Contact contact);
        List<Contact> DeleteUser(int id);
        void DeleteAll();
    }
}
