import './app-spinner.css';

export default function AppSpinner(): JSX.Element {
  return (
    <div className='lds-spinner-wrapper'>
      <div className='lds-spinner'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
