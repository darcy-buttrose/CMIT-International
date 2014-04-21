using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.Models;

namespace Web.Controllers
{
    public class ContactController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]Contact value)
        {
            var settings = ConfigurationManager.AppSettings;
            var message = new System.Net.Mail.MailMessage();
            message.To.Add(settings["Smtp.To"]);
            message.CC.Add(settings["Smtp.CC"]);
            message.Subject = value.Subject;
            message.From = new System.Net.Mail.MailAddress(value.From);
            message.Body = value.Message;
            var smtp = new System.Net.Mail.SmtpClient(settings["Smtp.Host"], int.Parse(settings["Smtp.Port"]))
            {
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(settings["Smtp.User"], settings["Smtp.Password"]),
                EnableSsl = bool.Parse(settings["Smtp.EnableSSL"])
            };
            smtp.Send(message);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}