import NavBar from '../components/NavBar';

const AppPageTwoColumn = (props) => {
  return (
    <>
      <div className="h-full">
        {props.meta}
        <main className="mt-12 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  {props.leftColumn}
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  {props.rightColumn}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AppPageTwoColumn;
