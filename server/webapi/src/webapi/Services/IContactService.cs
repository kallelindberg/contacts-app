using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IContactService
    {

        List<Contact> FindAllUsers();
        Contact FindUserById(int id);
        List<Contact> AddUser(Contact contact);
        List<Contact> UpdateUser(Contact contact);
        List<Contact> DeleteUser(int id);
        void DeleteAll();
        //int GetId();

    }
}
