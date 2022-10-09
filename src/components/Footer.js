import React from 'react';

const Footer = ({ darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';
  return (
    <div className={`lg:w-2/3 text-primary-${textColor}`}>
      <div className="flex flex-wrap">
        <a
          className={`flex mt-4 link-${textColor} mr-6 lg:mr-10 flex-row items-center`}
          href="https://github.com/sgcuber24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C3.5 0 0 3.5 0 8C0 13.25 4.75 15.5 5.5 15.5C6 15.5 6 15.25 6 15V13.75C4.25 14.25 3.5 13.25 3.25 12.5C3.25 12.5 3.25 12.25 2.75 11.75C2.5 11.5 1.5 11 2.5 11C3.25 11 3.75 12 3.75 12C4.5 13 5.5 12.75 6 12.5C6 12 6.5 11.5 6.5 11.5C4.5 11.25 3 10.5 3 7.75C3 6.75 3.25 6 3.75 5.5C3.75 5.5 3.25 4.5 3.75 3.25C3.75 3.25 5 3.25 6 4.25C6.75 3.75 9.25 3.75 10 4.25C11 3.25 12.25 3.25 12.25 3.25C12.75 5 12.25 5.5 12.25 5.5C12.75 6 13 6.75 13 7.75C13 10.5 11.25 11.25 9.5 11.5C9.75 11.75 10 12.25 10 13V15C10 15.25 10 15.5 10.5 15.5C11.25 15.5 16 13.25 16 8C16 3.5 12.5 0 8 0Z"
              fill={darkMode ? '#F2F2F2' : '#1A2026'}
            />
          </svg>
          <span className="ml-2 mr-1 text-sm">GitHub</span>
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
          className={`flex mt-4 link-${textColor} mr-6 lg:mr-10 flex-row items-center`}
          href="https://www.linkedin.com/in/gsriram24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1111 0H0.888889C0.653141 0 0.427048 0.0936505 0.260349 0.260349C0.0936505 0.427048 0 0.653141 0 0.888889V15.1111C0 15.3469 0.0936505 15.573 0.260349 15.7397C0.427048 15.9064 0.653141 16 0.888889 16H15.1111C15.3469 16 15.573 15.9064 15.7397 15.7397C15.9064 15.573 16 15.3469 16 15.1111V0.888889C16 0.653141 15.9064 0.427048 15.7397 0.260349C15.573 0.0936505 15.3469 0 15.1111 0ZM4.74578 13.6329H2.37067V5.99733H4.74578V13.6329ZM3.55822 4.95467C3.19328 4.95467 2.84329 4.8097 2.58524 4.55165C2.32719 4.2936 2.18222 3.9436 2.18222 3.57867C2.18222 3.21373 2.32719 2.86374 2.58524 2.60569C2.84329 2.34764 3.19328 2.20267 3.55822 2.20267C3.92316 2.20267 4.27315 2.34764 4.5312 2.60569C4.78925 2.86374 4.93422 3.21373 4.93422 3.57867C4.93422 3.9436 4.78925 4.2936 4.5312 4.55165C4.27315 4.8097 3.92316 4.95467 3.55822 4.95467ZM13.6338 13.6329H11.2613V9.92C11.2613 9.03467 11.2453 7.896 10.0276 7.896C8.792 7.896 8.60444 8.86133 8.60444 9.85778V13.6338H6.23378V5.99822H8.50933V7.04178H8.54222C8.85778 6.44178 9.63289 5.80889 10.7858 5.80889C13.1893 5.80889 13.6329 7.38933 13.6329 9.44622V13.6329H13.6338Z"
              fill={darkMode ? '#F2F2F2' : '#1A2026'}
            />
          </svg>

          <span className="ml-2 mr-1 text-sm">LinkedIn</span>
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
          className={`flex mt-4 link-${textColor} mr-6 lg:mr-10 flex-row items-center`}
          href="https://resume.creddle.io/resume/657k02y9xfn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span className="ml-2 mr-1 text-sm">Resume</span>
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
          className={`flex mt-4 link-${textColor} mr-6 lg:mr-10 flex-row items-center`}
          href="https://stackoverflow.com/users/12080199/g-sriram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 120 120"
          >
            <path
              fill={darkMode ? '#F2F2F2' : '#1A2026'}
              d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"
            />
            <path
              fill={darkMode ? '#F2F2F2' : '#1A2026'}
              d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"
            />
          </svg>
          <span className="ml-2 mr-1 text-sm">Stack Overflow</span>
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
      <div className={`text-xs mt-4 text-accent-${textColor}`}>
        Designed by{' '}
        <a
          className={`underline text-primary-${textColor} link-${textColor}`}
          href="https://karankowshik.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karan Kowshik
        </a>
      </div>
    </div>
  );
};

export default Footer;
