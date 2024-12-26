import React from "react";
import { useIntl } from "react-intl";
import { useLocale } from "../LocalizationProvider";
import phone_pic from "../assets/phone.png";
import location_pic from "../assets/map-pin.png";

export default function MasterHeader() {
  const { formatMessage } = useIntl();
  const { locale, switchLocale } = useLocale();

  return (
    <div className="lg:px-11 px-4">
  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-lg">
    <div className="info flex flex-wrap lg:flex-nowrap justify-end lg:space-x-10 sm:space-x-6 items-center lg:mx-9 h-auto py-4 gap-y-2 lg:gap-y-0">
      {/* Phone Info */}
      <div className="flex items-center space-x-2">
        <img
          src={phone_pic}
          alt={formatMessage({ id: "header.phone" })}
          className="h-5 w-5"
        />
        <span className="phone-text font-[Gabriola] text-sm sm:text-base font-normal leading-6">
          {formatMessage({ id: "header.phone_number" })}
        </span>
      </div>

      <span className="hidden sm:inline">|</span>

      {/* Location Info */}
      <div className="flex items-center space-x-2">
        <img
          src={location_pic}
          alt={formatMessage({ id: "header.location" })}
          className="h-5 w-5"
        />
        <span className="phone-text font-[Gabriola] text-sm sm:text-base font-normal leading-6">
          {formatMessage({ id: "header.address" })}
        </span>
      </div>

      <span className="hidden sm:inline">|</span>

      {/* Localization Dropdown */}
      <div className="flex items-center">
        <label htmlFor="language" className="sr-only">
          {formatMessage({ id: "header.language" })}
        </label>
        <select
          id="language"
          className="bg-red-500 font-[Gabriola] p-1 rounded text-sm sm:text-base font-normal leading-6"
          value={locale}
          onChange={(e) => switchLocale(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">عربي</option>
        </select>
      </div>
    </div>
  </div>
</div>

  );
}
