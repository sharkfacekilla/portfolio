import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
      <CardContent className="p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let's Create Something Amazing
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you're looking for a developer, collaborator, or just want to
          chat about technology, music, or photography, I'd love to connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"/pages/contact"}>
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-black"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href={"/pages/projects"}>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              View My Work
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
