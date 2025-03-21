import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb';

const SetMarkup: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [enabled, setEnabled] = useState(false);

  const tabs: string[] = [
    'Price Markup Setting',
    'International Price Markup Setting',
    'Hotel Markup',
    'Buses Markup',
    'Holidays Markup',
    'Low Balance Alert',
    'Train Service Charge',
  ];

  const renderTable = (tabIndex: number) => {
    switch (tabIndex) {
      case 1:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Airline Code
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Value
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Maximum Markup
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">S5</td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="full-fare">Full Fare</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 2:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Airline Code
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Value
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Maximum Markup
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">S5</td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="full-fare">Full Fare</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 3:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Value
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Maximum Markup
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="full-fare">Full Fare</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 4:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Value
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Maximum Markup
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="full-fare">Full Fare</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 5:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Markup Value
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Maximum Markup
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="full-fare">Full Fare</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="500"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 6:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600"></th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Alert when deposit is below
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">
                    <div>
                      <label
                        htmlFor="toggle3"
                        className="flex cursor-pointer select-none items-center"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle3"
                            className="sr-only"
                            onChange={() => {
                              setEnabled(!enabled);
                            }}
                          />
                          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                          <div
                            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                              enabled &&
                              '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                            }`}
                          >
                            <span className={`hidden ${enabled && '!block'}`}>
                              <svg
                                className="fill-white dark:fill-black"
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill=""
                                  stroke=""
                                  strokeWidth="0.4"
                                ></path>
                              </svg>
                            </span>
                            <span className={`${enabled && 'hidden'}`}>
                              <svg
                                className="h-4 w-4 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <span className="ml-3">Enable Low Balance Alert</span>
                      </label>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="40"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 7:
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Class Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Charges Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Charges On
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Charges Value
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Maximum Charges
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">AC</td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="fixed">Fixed</option>
                      <option value="percent">Percent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select className="w-full p-2 border rounded">
                      <option value="full-fare">Full Fare</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="40"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      placeholder="20"
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Breadcrumb pageName="Set Markup"   breadcrumbs={[{ name: 'Admin /', link: '#' }]}/>

      <div className="bg-cover bg-center flex items-center justify-center relative">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-7xl w-full mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center border-b pb-2">
            {tabs.map((tabName, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-lg rounded-md transition duration-300 border focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md 
                  ${selectedTab === index + 1 ? 'bg-blue-600 text-gray-600 font-semibold' : 'bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-blue-500'}`}
                onClick={() => setSelectedTab(index + 1)}
              >
                {tabName}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tabs.map((tabName, index) =>
            selectedTab === index + 1 ? (
              <div
                key={index}
                className="transition-opacity duration-500 ease-in-out opacity-100"
              >
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="py-6 px-4 md:px-6 xl:px-7.5">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                      {tabName}
                    </h4>
                  </div>

                  {renderTable(selectedTab)}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </>
  );
};

export default SetMarkup;
