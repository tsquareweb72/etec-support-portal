import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Warning Prompt</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} boil advisory prompts to send via email and text message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            tag {' '}
            <span className="font-normal">
              (Advisory Title)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Write your Boil Advisory Title here..."
            required
            className="form_input"
            />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Boil Advisory Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your Boil Advisory prompt here..."
            required
            className="form_textarea"
            />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-blue rounded-full text-white"
            >
              {submitting ? `${type}...` : type}
            </button>
        </div>
      </form>
    </section>
  )
}

export default Form