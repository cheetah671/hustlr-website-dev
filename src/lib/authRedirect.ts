function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export function getPublicAppOrigin() {
  const configuredOrigin = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (configuredOrigin) {
    return stripTrailingSlash(configuredOrigin);
  }

  if (typeof window !== "undefined") {
    return stripTrailingSlash(window.location.origin);
  }

  return "";
}

export function getStudentEmailRedirectUrl() {
  return `${getPublicAppOrigin()}/api/auth/confirm?next=/get-started/student/application`;
}

export function getClientEmailRedirectUrl() {
  return `${getPublicAppOrigin()}/api/client/auth/confirm?next=/get-started/client/dashboard`;
}
