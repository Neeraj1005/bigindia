import Image from "next/image";

const ProductLocation = () => {
  return (
    <div className="blueBg py-10 mb-12">
      <h1 className="text-4xl font-extrabold text-white text-center">
        Choose your suppliers by cities
      </h1>
      <div className="max-w-4xl p-8 mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 md:grid-cols-5">
          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src={`/images/delhi.jpg`}
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Delhi</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src={`/images/bengaluru.jpg`}
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Bengaluru</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src={`/images/chennai.jpg`}
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Chennai</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  src={`/images/mumbai.jpg`}
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Mumbai</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src="/images/ahmedabad.jpg"
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Ahmedabad</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src="/images/kolkata.jpg"
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Kolkata</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src="/images/pune.jpg"
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Pune</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src="/images/surat.jpg"
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Surat</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src="/images/jaipur.jpg"
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Jaipur</p>
            </a>
          </div>

          <div>
            <a className="text-white hover:text-blue-100" href="#">
              <div>
                <Image
                  className="block object-fill w-30 h-30 rounded-full border-2 border-white p-1"
                  src="/images/hyderabad.jpg"
                  alt="Thumbnail"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-center mt-3 text-xl">Hyderabad</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLocation;
