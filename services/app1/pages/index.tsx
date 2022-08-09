import Hello from "@hyeonq/common/src/components/hello";

export interface IndexProps {}

function Index(props: IndexProps) {
    const {} = props;

    return (
        <>
            <div>
              <Hello/>
            </div>

            <style jsx>{``}</style>
        </>
    );
}

export default Index;
