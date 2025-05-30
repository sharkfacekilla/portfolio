import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
interface NavbarProps {
  isVisible: boolean;
}

let socialData = [
  {
    icon: Github,
    href: "https://github.com/sharkfacekilla",
    label: "GitHub",
  },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  {
    icon: Mail,
    href: "mailto:gage@example.com",
    label: "Email",
  },
];

export default function Contact({ isVisible }: NavbarProps) {
  return (
    <>
      <section className="relative z-10 px-6 lg:px-12 py-32 mb-32 lg:mb-0">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-1000 mb-12 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
<h2 className="text-3xl lg:text-4xl font-bold mb-6">
  Let&rsquo;s Build Something Amazing
</h2>
<p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
  Ready to bring your ideas to life? Let&rsquo;s discuss your next project.
</p>

            <div className="flex justify-center space-x-6 mb-8">
              {socialData.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                >
                  <social.icon className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </Link>
              ))}
            </div>

            <Link href="/pages/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
              >
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
