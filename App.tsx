import * as React from "react";
import { connect } from "@joyid/evm/web2login";

interface Props {
  pubkey: string | null;
}

interface Response {
  uid: string
  entropy: string
}


const ConnectWithUid = ({ uid }: { uid: string }) => {
  const [res, setRes] = React.useState<Response | null>(null);
  const onSign = async () => {
    const signedEvent = await connect(uid);
    setRes(signedEvent);
  };

  return uid ? (
    <div className="w-full">
      <h2 className="mb-4 text-lg text-center">Get Connected entropy</h2>
      <label className="label">Response:</label>
      <textarea
        className="textarea textarea-bordered w-full h-60 mb-4"
        placeholder=""
        value={res ? JSON.stringify(res, null, 4) : ''}
        disabled
      ></textarea>

      <button className="btn btn-primary mb-4 mr-4" onClick={onSign}>
        Get Connected entropy
      </button>

      <div className="divider"></div>
    </div>
  ) : null;
};

export default function App() {
  const [res, setRes] = React.useState<Response | null>(
    null,
  );
  const onConnect = async () => {
    try {
      const res = await connect()
      setRes(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="app">
      {res ? (
        <>
          <h1 className="text-xl mb-4">{`Connected: ${res.uid}`}</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              setRes(null);
            }}
          >
            Disconnect
          </button>
          <div className="w-full">
            <label className="label text-left">Response:</label>
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-60 mb-4"
            placeholder="Signature"
            value={JSON.stringify(res, null, 4)}
            disabled
          ></textarea>
          <div className="divider" />
        </>
      ) : (
        <button className="btn btn-primary" onClick={onConnect}>
          Connect JoyID
        </button>
      )}
      {res ? <ConnectWithUid uid={res.uid}  /> : null}
    </div>
  );
}