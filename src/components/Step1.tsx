import Head from "next/head";
import Input from "~/components/input";

export default function Step1({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="flex flex-col gap-8 bg-white px-40 py-12">
        <h4 className="text-medium font-semibold">Tell us about yourself.</h4>
        <Input name={"age"} placeholder={""} label={"Age"} />
        <Input name={"weight"} placeholder={""} label={"Weight"} />
        <button
          className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
          type="submit"
        >
          NEXT
        </button>
      </div>
    </>
  );
}
