using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Alcev.Components.Base;

namespace Alcev.Components
{
    public class TeacherTabViewComponent  : BaseViewComponent
    {
        public TeacherTabViewComponent() : base("TeacherTabViewComponent")
        {
            
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(await Task.FromResult(""));
        }
    }
}
