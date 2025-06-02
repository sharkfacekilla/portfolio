import { ImagesWithCaption } from "@/app/utils/app-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

export default function ImagesTab({ images }: { images: ImagesWithCaption[] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openCarousel(index: number) {
    setCurrentIndex(index);
    setOpen(true);
  }

  function nextImage() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  return (
    <>
      <TabsContent value="images" className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 md:px-6 py-12">
          {images.length > 0 ? (
            images.map((src, index) => (
              <Card
                key={index}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-lg shadow-md"
                onClick={() => openCarousel(index)}
              >
                <CardContent className="p-0 relative w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src={`/img/${src.src}`}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-400 italic col-span-full">
              No specific learnings were defined for this project.
            </p>
          )}
        </div>
      </TabsContent>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black text-white border-white/10 border-4 max-w-7xl w-full h-[80vh] flex flex-col items-center justify-center p-4 space-y-4">
          <DialogHeader>
            <DialogTitle>Photo Gallery</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-[70vh]">
            <Image
              src={`/img/${images[currentIndex].src}`}
              alt={`Image ${currentIndex + 1}`}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-white">{`${images[currentIndex].caption}`}</p>

          <div className="flex justify-between w-full text-white">
            <Button variant="ghost" onClick={prevImage}>
              ← Previous
            </Button>
            <Button variant="ghost" onClick={nextImage}>
              Next →
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
