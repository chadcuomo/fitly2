import Head from "next/head";
import Input from "~/components/input";
import GenderRadioGroup from "./GenderRadioGroup";

export default function Step2({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="flex flex-col items-center gap-8 bg-white px-40 py-12">
        <h4 className="text-medium font-semibold">What&apos;s your gender?</h4>
        <GenderRadioGroup />
        <div className="flex justify-center">
          <button
            className="w-32 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
            type="submit"
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}
