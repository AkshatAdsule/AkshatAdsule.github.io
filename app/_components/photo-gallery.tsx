import Image from "next/image";

const photos = [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
];

export function PhotoGallery() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
                <div key={index} className="group relative">
                    <Image
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white text-lg">Photo {index + 1}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
