using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data
{
    public class ContactContext: DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options){ }

        public DbSet<Contact> Contact { get; set; }
        public DbSet<Login> Login { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable("Contact");
            modelBuilder.Entity<Login>().ToTable("Login");
        }
    }
}