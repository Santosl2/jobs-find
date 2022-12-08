import { Job } from "@/components";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRedux } from "../render";

const job = {
  id: 1,
  labels: [
    {
      id: 1,
      name: "label",
      color: "#fff",
    },
  ],
  title: "title",
  user: {
    id: 1,
    avatar_url: "avatar_url",
    login: "login",
  },
  created_at: new Date().getTime(),
};

const mockedPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockedPush,
  }),
}));

describe("Job Component test", () => {
  it("should be able to render correctly", () => {
    renderWithRedux(
      <Job
        title={job.title}
        id={job.id}
        user={job.user}
        labels={job.labels}
        created_at={job.created_at}
      />
    );

    expect(screen.getByTestId("jobTest")).toBeInTheDocument();
    expect(screen.getByText(job.title)).toBeInTheDocument();

    job.labels.forEach((label) => {
      expect(screen.getByText(label.name)).toBeInTheDocument();
    });
  });

  it("should be able to redirect to details page", () => {
    renderWithRedux(
      <Job
        title={job.title}
        id={job.id}
        user={job.user}
        labels={job.labels}
        created_at={job.created_at}
      />
    );

    const jobComponent = screen.getByTestId("jobTest");

    fireEvent.click(jobComponent);

    expect(mockedPush).toHaveBeenCalledWith(`/details/${job.id}`);
  });
});
