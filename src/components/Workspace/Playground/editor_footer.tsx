import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type EditorFooterProps = {
  handleSubmit: () => void;
  isSubmitting?: boolean;
  handleRun?: () => void;
};

export default function EditorFooter({
  handleSubmit,
  isSubmitting = false,
  handleRun
}: EditorFooterProps) {
  return (
    <div className="flex bg-dark-layer-1 absolute bottom-0 z-10 w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg">
            Console
            <div className="ml-1 transform transition flex items-center">
              <BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6" />
            </div>
          </button>
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          {handleRun && (
            <button
              className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg"
              onClick={handleRun}
              disabled={isSubmitting}
            >
              Run
            </button>
          )}

          <button
            className={`px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm rounded-lg ${
              isSubmitting
                ? "bg-dark-green-s text-white cursor-not-allowed opacity-60"
                : "bg-dark-green-s hover:bg-green-3 text-white"
            }`}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
