"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const Accordions = () => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between py-4 border-b  text-left text-16px leading-[150%] font-medium text-[#0F172A] focus:outline-none focus-visible:ring-0 ${
                !open ? "border-b-[#E2E8F0]" : "border-b-transparent"
              }`}
            >
              <span>Strength</span>
              <ChevronUpIcon
                className={`size-4 text-[#0F172A] ${
                  open ? "rotate-180 transform" : ""
                }`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                className={`text-sm text-slate-900 text-[14px] leading-[142%] font-normal border-b ${
                  open ? "border-b-[#E2E8F0] pb-4" : "border-b-transparent"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between py-4 border-b  text-left text-16px leading-[150%] font-medium text-[#0F172A] focus:outline-none focus-visible:ring-0 ${
                !open ? "border-b-[#E2E8F0]" : "border-b-transparent"
              }`}
            >
              <span>Weakness</span>
              <ChevronUpIcon
                className={`size-4 text-[#0F172A] ${
                  open ? "rotate-180 transform" : ""
                }`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                className={`text-sm text-slate-900 text-[14px] leading-[142%] font-normal border-b ${
                  open ? "border-b-[#E2E8F0] pb-4" : "border-b-transparent"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between py-4 border-b  text-left text-16px leading-[150%] font-medium text-[#0F172A] focus:outline-none focus-visible:ring-0 ${
                !open ? "border-b-[#E2E8F0]" : "border-b-transparent"
              }`}
            >
              <span>Opportunities</span>
              <ChevronUpIcon
                className={`size-4 text-[#0F172A] ${
                  open ? "rotate-180 transform" : ""
                }`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                className={`text-sm text-slate-900 text-[14px] leading-[142%] font-normal border-b ${
                  open ? "border-b-[#E2E8F0] pb-4" : "border-b-transparent"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between py-4 border-b  text-left text-16px leading-[150%] font-medium text-[#0F172A] focus:outline-none focus-visible:ring-0 ${
                !open ? "border-b-[#E2E8F0]" : "border-b-transparent"
              }`}
            >
              <span>Threats</span>
              <ChevronUpIcon
                className={`size-4 text-[#0F172A] ${
                  open ? "rotate-180 transform" : ""
                }`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                className={`text-sm text-slate-900 text-[14px] leading-[142%] font-normal border-b ${
                  open ? "border-b-[#E2E8F0] pb-4" : "border-b-transparent"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
};

export { Accordions };
