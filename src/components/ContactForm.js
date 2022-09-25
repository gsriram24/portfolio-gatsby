import React from 'react';

const ContactForm = ({ darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';
  const bgColor = !darkMode ? 'light' : 'dark';
  const textInputStyle = `text-primary-${textColor} bg-transparent fill-transparent opacity-100 outline-none`;
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={`w-full sm:w-3/4 md:w-3/4 lg:w-full bg-secondary-${bgColor} p-8 lg:p-10 xl:p-12 text-primary-${textColor}`}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="text-lg md:text-xl xl:text-2xl w-3/4">
        Get in touch with me to create memorable experiences
      </div>
      <div className="mt-6 text-xs md:text-sm">
        <div className="flex flex-row">
          <label htmlFor="name" className="mr-4">
            Name:
          </label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            id="name"
            className={textInputStyle}
            required
          />
        </div>
        <div className="mt-6 flex flex-row">
          <label htmlFor="email" className="mr-4">
            Email:
          </label>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            id="email"
            className={textInputStyle}
            required
          />
        </div>
        <div className="mt-6 flex flex-row">
          <label htmlFor="description" className="mr-4">
            Message:
          </label>
          <textarea
            placeholder="Leave a message"
            name="description"
            id="description"
            rows="5"
            cols="50"
            className={textInputStyle}
            required
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  sm:items-center justify-between mt-8">
        <button
          type="submit"
          className={`flex flex-row items-center text-primary-${
            darkMode ? 'orange' : 'blue'
          }`}
        >
          <span className="underline text-xs mr-1">Submit form</span>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.55556 3.55556C7.43768 3.55556 7.32464 3.60238 7.24129 3.68573C7.15794 3.76908 7.11111 3.88213 7.11111 4V6.66667C7.11111 6.78454 7.06429 6.89759 6.98094 6.98094C6.89759 7.06429 6.78454 7.11111 6.66667 7.11111H1.33333C1.21546 7.11111 1.10241 7.06429 1.01906 6.98094C0.935714 6.89759 0.888889 6.78454 0.888889 6.66667V1.33333C0.888889 1.21546 0.935714 1.10241 1.01906 1.01906C1.10241 0.935714 1.21546 0.888889 1.33333 0.888889H4C4.11787 0.888889 4.23092 0.842064 4.31427 0.758714C4.39762 0.675365 4.44444 0.562318 4.44444 0.444444C4.44444 0.32657 4.39762 0.213524 4.31427 0.130175C4.23092 0.0468252 4.11787 0 4 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V4C8 3.88213 7.95318 3.76908 7.86983 3.68573C7.78648 3.60238 7.67343 3.55556 7.55556 3.55556Z"
              fill={darkMode ? '#FFBB66' : '#005AB4'}
            />
            <path
              d="M5.77778 0.888889H6.48L3.68444 3.68C3.64279 3.72132 3.60972 3.77047 3.58716 3.82463C3.5646 3.87879 3.55298 3.93688 3.55298 3.99556C3.55298 4.05423 3.5646 4.11232 3.58716 4.16648C3.60972 4.22064 3.64279 4.26979 3.68444 4.31111C3.72576 4.35277 3.77492 4.38583 3.82908 4.4084C3.88324 4.43096 3.94133 4.44258 4 4.44258C4.05867 4.44258 4.11676 4.43096 4.17092 4.4084C4.22508 4.38583 4.27424 4.35277 4.31556 4.31111L7.11111 1.52V2.22222C7.11111 2.3401 7.15794 2.45314 7.24129 2.53649C7.32464 2.61984 7.43768 2.66667 7.55556 2.66667C7.67343 2.66667 7.78648 2.61984 7.86983 2.53649C7.95318 2.45314 8 2.3401 8 2.22222V0.444444C8 0.32657 7.95318 0.213524 7.86983 0.130175C7.78648 0.0468252 7.67343 0 7.55556 0H5.77778C5.6599 0 5.54686 0.0468252 5.46351 0.130175C5.38016 0.213524 5.33333 0.32657 5.33333 0.444444C5.33333 0.562318 5.38016 0.675365 5.46351 0.758714C5.54686 0.842064 5.6599 0.888889 5.77778 0.888889Z"
              fill={darkMode ? '#FFBB66' : '#005AB4'}
            />
          </svg>
        </button>
        <div className="flex flex-row mt-6 sm:mt-0 flex-wrap items-center">
          <a
            className={`flex flex-row link-${textColor} mr-6 items-center`}
            href="https://wa.me/+918762412275?text=Hey%20I%20found%20your%20contact%20through%20your%20website%20and%20wanted%20to%20have%20a%20chat!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path
                fill={darkMode ? '#F2F2F2' : '#1A2026'}
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            <span className="ml-2 mr-1 text-xs">WhatsApp</span>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55556 3.55556C7.43768 3.55556 7.32464 3.60238 7.24129 3.68573C7.15794 3.76908 7.11111 3.88213 7.11111 4V6.66667C7.11111 6.78454 7.06429 6.89759 6.98094 6.98094C6.89759 7.06429 6.78454 7.11111 6.66667 7.11111H1.33333C1.21546 7.11111 1.10241 7.06429 1.01906 6.98094C0.935714 6.89759 0.888889 6.78454 0.888889 6.66667V1.33333C0.888889 1.21546 0.935714 1.10241 1.01906 1.01906C1.10241 0.935714 1.21546 0.888889 1.33333 0.888889H4C4.11787 0.888889 4.23092 0.842064 4.31427 0.758714C4.39762 0.675365 4.44444 0.562318 4.44444 0.444444C4.44444 0.32657 4.39762 0.213524 4.31427 0.130175C4.23092 0.0468252 4.11787 0 4 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V4C8 3.88213 7.95318 3.76908 7.86983 3.68573C7.78648 3.60238 7.67343 3.55556 7.55556 3.55556Z"
                fill={darkMode ? '#F2F2F2' : '#1A2026'}
              />
              <path
                d="M5.77778 0.888889H6.48L3.68444 3.68C3.64279 3.72132 3.60972 3.77047 3.58716 3.82463C3.5646 3.87879 3.55298 3.93688 3.55298 3.99556C3.55298 4.05423 3.5646 4.11232 3.58716 4.16648C3.60972 4.22064 3.64279 4.26979 3.68444 4.31111C3.72576 4.35277 3.77492 4.38583 3.82908 4.4084C3.88324 4.43096 3.94133 4.44258 4 4.44258C4.05867 4.44258 4.11676 4.43096 4.17092 4.4084C4.22508 4.38583 4.27424 4.35277 4.31556 4.31111L7.11111 1.52V2.22222C7.11111 2.3401 7.15794 2.45314 7.24129 2.53649C7.32464 2.61984 7.43768 2.66667 7.55556 2.66667C7.67343 2.66667 7.78648 2.61984 7.86983 2.53649C7.95318 2.45314 8 2.3401 8 2.22222V0.444444C8 0.32657 7.95318 0.213524 7.86983 0.130175C7.78648 0.0468252 7.67343 0 7.55556 0H5.77778C5.6599 0 5.54686 0.0468252 5.46351 0.130175C5.38016 0.213524 5.33333 0.32657 5.33333 0.444444C5.33333 0.562318 5.38016 0.675365 5.46351 0.758714C5.54686 0.842064 5.6599 0.888889 5.77778 0.888889Z"
                fill={darkMode ? '#F2F2F2' : '#1A2026'}
              />
            </svg>
          </a>
          <a
            className={`flex flex-row link-${textColor} items-center`}
            href="tel:+918762412275"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="ml-2 mr-1 text-xs">Phone</span>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55556 3.55556C7.43768 3.55556 7.32464 3.60238 7.24129 3.68573C7.15794 3.76908 7.11111 3.88213 7.11111 4V6.66667C7.11111 6.78454 7.06429 6.89759 6.98094 6.98094C6.89759 7.06429 6.78454 7.11111 6.66667 7.11111H1.33333C1.21546 7.11111 1.10241 7.06429 1.01906 6.98094C0.935714 6.89759 0.888889 6.78454 0.888889 6.66667V1.33333C0.888889 1.21546 0.935714 1.10241 1.01906 1.01906C1.10241 0.935714 1.21546 0.888889 1.33333 0.888889H4C4.11787 0.888889 4.23092 0.842064 4.31427 0.758714C4.39762 0.675365 4.44444 0.562318 4.44444 0.444444C4.44444 0.32657 4.39762 0.213524 4.31427 0.130175C4.23092 0.0468252 4.11787 0 4 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V4C8 3.88213 7.95318 3.76908 7.86983 3.68573C7.78648 3.60238 7.67343 3.55556 7.55556 3.55556Z"
                fill={darkMode ? '#F2F2F2' : '#1A2026'}
              />
              <path
                d="M5.77778 0.888889H6.48L3.68444 3.68C3.64279 3.72132 3.60972 3.77047 3.58716 3.82463C3.5646 3.87879 3.55298 3.93688 3.55298 3.99556C3.55298 4.05423 3.5646 4.11232 3.58716 4.16648C3.60972 4.22064 3.64279 4.26979 3.68444 4.31111C3.72576 4.35277 3.77492 4.38583 3.82908 4.4084C3.88324 4.43096 3.94133 4.44258 4 4.44258C4.05867 4.44258 4.11676 4.43096 4.17092 4.4084C4.22508 4.38583 4.27424 4.35277 4.31556 4.31111L7.11111 1.52V2.22222C7.11111 2.3401 7.15794 2.45314 7.24129 2.53649C7.32464 2.61984 7.43768 2.66667 7.55556 2.66667C7.67343 2.66667 7.78648 2.61984 7.86983 2.53649C7.95318 2.45314 8 2.3401 8 2.22222V0.444444C8 0.32657 7.95318 0.213524 7.86983 0.130175C7.78648 0.0468252 7.67343 0 7.55556 0H5.77778C5.6599 0 5.54686 0.0468252 5.46351 0.130175C5.38016 0.213524 5.33333 0.32657 5.33333 0.444444C5.33333 0.562318 5.38016 0.675365 5.46351 0.758714C5.54686 0.842064 5.6599 0.888889 5.77778 0.888889Z"
                fill={darkMode ? '#F2F2F2' : '#1A2026'}
              />
            </svg>
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
