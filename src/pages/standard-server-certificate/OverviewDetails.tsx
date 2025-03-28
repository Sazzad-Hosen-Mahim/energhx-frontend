import light from "../../assets/Profile/lightGreen.svg";
import ractangle from "../../assets/Rectangle 1.png";

const OverviewDetails = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-semibold">
            Overview <span className="text-green-500">→ Details</span>
          </h2>
          <button className="px-[24px] py-[12px] bg-[#E6F7FF] border-[#00ADFF] rounded-md text-[#00ADFF]">
            Pending ▼
          </button>
        </div>

        {/* Image Section */}
        <div className="my-4">
          <img src={ractangle} alt="Lamp" className="w-full rounded-lg" />
        </div>

        <div className="flex">
          <div className="w-1/2">
            {/* Introduction Section */}
            <div>
              <h3 className="text-lg font-medium">Introduction Energyhx</h3>
              <p className="text-gray-600 text-sm mt-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </p>
            </div>

            {/* Facilities Section */}
            <div className="mt-6">
              <h3 className="text-green-600 font-bold text-lg">FACILITIES</h3>
              <p className="font-normal">
                Here is our some lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <ul className="space-y-4">
                {[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Cras egestas lectus tristique lectus mollis suscipit.",
                  "Sed vestibulum non sed odioSed vestibulum nibh sed odio rutrum, id pretium risus luctus.",
                  "Maecenas quis ligulaMaecenas quis ligula sit amet ex dictum egestas.",
                  "Mauris nec lorem aliquotMauris nec lorem aliquet, maximus orci at, tristique eros.",
                  "Aenean eu magna Aenean a arcu eu magna interdum blandit non a arcu.",
                  "Nunc ut Nunc ut mauris maximus, interdum lectus sit amet, venenatis turpis. maximus",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <img src={light} alt="" className="h-4 w-4" />
                    <span className="text-[#758179] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Note:</strong> Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in classical Latin
                literature from 45 BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            {/* Consumer Details Section */}
            <div className="mt-6 bg-[#EAF7E6] p-4 rounded-md">
              <h3 className="text-green-600 font-bold text-lg">
                CONSUMER DETAILS
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-sm py-1 text-gray-600 border-b border-b-[#BEE6B0]">
                    First Name
                  </p>
                  <p className="font-normal py-1">Michael</p>
                </div>
                <div>
                  <p className="text-sm py-1 text-gray-600 border-b border-b-[#BEE6B0]">
                    Last Name
                  </p>
                  <p className="font-normal py-1">Reynolds</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm py-1 text-gray-600 border-b border-b-[#BEE6B0]">
                  Service Locations
                </p>
                <p className="font-normal py-1">
                  27 Maple Avenue, Los Angeles, CA 90012
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm py-1 text-gray-600 border-b border-b-[#BEE6B0]">
                  Permanent Locations
                </p>
                <p className="font-normal py-1">
                  101 Sunset Boulevard, San Francisco, CA 94110
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Note</p>
                <p className="text-gray-700 font-normal">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi.At vero eos et accusamus
                  et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetails;
