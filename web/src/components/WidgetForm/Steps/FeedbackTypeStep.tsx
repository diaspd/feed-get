import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps){
    return(
        <>
        <header>
        <span className="text-xl leading-8 font-semibold">Deixe seu feedback</span>
    
        <CloseButton />
        </header>


        <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return(
                <button
                    key={key}
                    className="bg-zinc-900 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-cyan-900 focus:border-cyan-900 focus:outline-none font-bold"
                    onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                    type="button"
                >
                    <img src={value.image.source} alt={value.image.alt} />
                    <span>{value.title}</span>
                </button>
            )
        })}
    </div>
    </>
    )
}