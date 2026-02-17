export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      option,
      message,
      dealerName,
      website,
    } = body;

    // 🔹 Basic Validation
    if (!name || !phone || !email) {
      return Response.json(
        { success: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return Response.json(
        { success: false, error: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // 🔹 Clean Payload For Google Sheet
    const payload = {
      name,
      phone,
      email,
      option,
      message,
      dealerName: dealerName || "N/A",
      website: website || "Unknown",
      timestamp: new Date().toISOString(),
    };

    const googleRes = await fetch(
      "https://script.google.com/macros/s/AKfycbyeG2dPUgp6JfG4FYEGx4JOroXvBnUJbLF0oJkUipc8hC5Mc3rii9hbhEFEnZkxtWQh/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!googleRes.ok) {
      return Response.json(
        { success: false, error: "Failed to connect to Google Script" },
        { status: 502 }
      );
    }

    const text = await googleRes.text();

    let result;

    try {
      result = JSON.parse(text);
    } catch (error) {
      return Response.json(
        { success: false, error: "Invalid response from Google Script" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Form submitted successfully",
      data: result,
    });

  } catch (err) {
    console.error("Submit API Error:", err);

    return Response.json(
      { success: false, error: "Server error. Please try later." },
      { status: 500 }
    );
  }
}
