// export async function POST(req) {
//   console.log("API HIT");

//   try {
//     const body = await req.json();

//     const {
//       name,
//       phone,
//       option,
//       message,
//       dealerName,
//     } = body;

//     if (!name || !phone) {
//       return Response.json(
//         { success: false, error: "Required fields missing" },
//         { status: 400 }
//       );
//     }

//     if (!/^\d{10}$/.test(phone)) {
//       return Response.json(
//         { success: false, error: "Invalid phone number" },
//         { status: 400 }
//       );
//     }

//     // Current domain detect
//     const host = req.headers.get("host");
//     const protocol =
//       process.env.NODE_ENV === "development" ? "http" : "https";

//     const website = `${protocol}://${host}`;

//     const payload = {
//       name,
//       phone,
//       option,
//       message,
//       dealerName: dealerName || "N/A",
//       website,
//       timestamp: new Date().toISOString(),
//     };

//     const googleRes = await fetch(
      
//       "https://script.google.com/macros/s/AKfycbyfD2qVx8pP6ngQRFDwSQAleNkqIAzVTNxfg6LGblKoMIaaBa0eze61jjEZq9cIZLb0RA/exec",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }
//     );

//    const text = await googleRes.text();

// console.log("Google Status:", googleRes.status);
// console.log("Google Response:", text);

//     return Response.json({
//       success: true,
//       website,
//       data: text,
//     });
//   } catch (err) {
//     return Response.json(
//       {
//         success: false,
//         error: err.message,
//       },
//       { status: 500 }
//     );
//   }
// }
export async function POST(req) {
  console.log("API HIT");

  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      option,
      message,
      dealerName,
    } = body;

    // Validation
    if (!name || !phone) {
      return Response.json(
        {
          success: false,
          error: "Required fields missing",
        },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return Response.json(
        {
          success: false,
          error: "Invalid phone number",
        },
        { status: 400 }
      );
    }

    // Current Domain Auto Detect
    const host = req.headers.get("host");
    const protocol =
      process.env.NODE_ENV === "development"
        ? "http"
        : "https";

    const website = `${protocol}://${host}`;

    const payload = {
      name,
      phone,
      email: email || "",
      option: option || "",
      message: message || "",
      dealerName: dealerName || "N/A",
      website,
      timestamp: new Date().toISOString(),
    };

    console.log("Payload Sent:", payload);

    const googleRes = await fetch(
      "https://script.google.com/macros/s/AKfycbyfD2qVx8pP6ngQRFDwSQAleNkqIAzVTNxfg6LGblKoMIaaBa0eze61jjEZq9cIZLb0RA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const text = await googleRes.text();

    console.log("Google Status:", googleRes.status);
    console.log("Google Response:", text);

    if (!googleRes.ok) {
      return Response.json(
        {
          success: false,
          error: "Google Script Error",
          response: text,
        },
        { status: 500 }
      );
    }

    let result = {};

    try {
      result = JSON.parse(text);
    } catch {
      result = {
        message: text,
      };
    }

    return Response.json({
      success: true,
      website,
      data: result,
    });

  } catch (err) {
    console.error("Submit API Error:", err);

    return Response.json(
      {
        success: false,
        error: err.message || "Server Error",
      },
      { status: 500 }
    );
  }
}