//https://next-auth.js.org/tutorials/securing-pages-and-api-routes#nextjs-middleware

export { default } from "next-auth/middleware"


//hmmm, i think adding this line helps, this way i can choose what routes are protected by auth! -Jackson "BOFH" Michael Van Todd Gabriel Chris Barnes II
export const config = { matcher: ["/", "/scada", "/logs", "/cams"]}