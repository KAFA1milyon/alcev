using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Alcev.Components.Base;

namespace Alcev.Components
{
    public class AnnouncementVideoViewComponent  : BaseViewComponent
    {
        public AnnouncementVideoViewComponent() : base("AnnouncementVideoViewComponent")
        {
            
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(await Task.FromResult(""));
        }
    }
}
